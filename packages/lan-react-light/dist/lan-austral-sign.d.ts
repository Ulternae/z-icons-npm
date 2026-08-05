import React from 'react';

export interface LanAustralSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAustralSign(props: LanAustralSignProps): React.ReactElement;
export default LanAustralSign;
