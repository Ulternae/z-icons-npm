import React from 'react';

export interface LanAmpersandProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAmpersand(props: LanAmpersandProps): React.ReactElement;
export default LanAmpersand;
