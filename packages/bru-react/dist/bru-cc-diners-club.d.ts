import React from 'react';

export interface BruCcDinersClubProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruCcDinersClub(props: BruCcDinersClubProps): React.ReactElement;
export default BruCcDinersClub;
