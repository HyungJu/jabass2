const teams = [
  { id: 1, name: 'team1' },
  { id: 2, name: 'team2' },
  { id: 3, name: 'team3' },
  { id: 4, name: 'team4' },
  { id: 5, name: 'team5' },
  { id: 6, name: 'team6' },
  { id: 7, name: 'team7' },
  { id: 8, name: 'team8' },
  { id: 9, name: 'team9' },
  { id: 10, name: 'team10' },
];

const TEAM_TEMPLATE = `
<div class="team-wrapper">
  <ul>
    ${teams
      .map(
        (team) =>
          `
          <div>
            <li data-team-id=${team.id}>${team.name}</li>
            <button>가입</button>
          </div>
          `
      )
      .join('')}
  </ul>
</div>
`;

export default TEAM_TEMPLATE;
