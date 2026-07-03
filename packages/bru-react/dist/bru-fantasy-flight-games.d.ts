import React from 'react';

export interface BruFantasyFlightGamesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruFantasyFlightGames(props: BruFantasyFlightGamesProps): React.ReactElement;
export default BruFantasyFlightGames;
