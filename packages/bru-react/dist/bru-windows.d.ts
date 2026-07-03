import React from 'react';

export interface BruWindowsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruWindows(props: BruWindowsProps): React.ReactElement;
export default BruWindows;
