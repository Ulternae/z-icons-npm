import React from 'react';

export interface BruFantasyFlightGamesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruFantasyFlightGames: React.FC<BruFantasyFlightGamesProps>;
export default BruFantasyFlightGames;
