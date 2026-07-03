import React from 'react';

export interface BruSkypeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSkype(props: BruSkypeProps): React.ReactElement;
export default BruSkype;
