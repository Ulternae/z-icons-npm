import React from 'react';

export interface LanBoxIsometricProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxIsometric(props: LanBoxIsometricProps): React.ReactElement;
export default LanBoxIsometric;
