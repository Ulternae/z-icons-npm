import React from 'react';

export interface BruGripfireProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruGripfire(props: BruGripfireProps): React.ReactElement;
export default BruGripfire;
