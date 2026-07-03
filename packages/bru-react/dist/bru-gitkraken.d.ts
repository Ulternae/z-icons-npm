import React from 'react';

export interface BruGitkrakenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruGitkraken(props: BruGitkrakenProps): React.ReactElement;
export default BruGitkraken;
