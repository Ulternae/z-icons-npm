import React from 'react';

export interface LanPersonPinballProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonPinball(props: LanPersonPinballProps): React.ReactElement;
export default LanPersonPinball;
