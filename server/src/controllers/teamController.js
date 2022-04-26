const connection = require('../services/mysql');

module.exports = {  
  makeTeam: (req, res) => {
	const { name } = req.body;
	const { userId } = req.body;
	const { teamId } = req.body;

    connection.query(
      'INSERT INTO `team` (name) VALUES (?)',
      name,
      (qErr) => {
        if (qErr) res.send({ success: false});
        else {
			connection.query(
				'INSERT INTO `teamUser` (userId, teamId) VALUES (? , ?)',
				[userId,teamId],
				(qErr2) => {
					if (qErr2) res.send({ success: false});
					else res.send({ success: true });
				},
			);
		}
      },
    );
  },
  
  editTeam: (req, res) => {
	const { new_name } = req.body;
	const { teamId } = req.body;

    connection.query(
      'UPDATE `team` SET name = ? WHERE id = ?',
      [new_name,teamId],
      (qErr) => {
        if (qErr) res.send({ success: false});
        else res.send({ success: true });
      },
    );
  },
  
  leaveTeam: (req, res) => {
    const { userId } = req.body;
	const { teamId } = req.body;

    connection.query(
      'DELETE FROM `teamUser` WHERE userId = ? && teamId = ?',
      [userId, teamId],
      (qErr) => {
        if (qErr) res.send({ success: false});
        else res.send({ success: true });
      },
    );
  },
  
};
