import React from 'react';

export interface BruYammerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruYammer(props: BruYammerProps): React.ReactElement;
export default BruYammer;
