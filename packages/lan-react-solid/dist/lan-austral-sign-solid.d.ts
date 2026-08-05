import React from 'react';

export interface LanAustralSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAustralSignSolid(props: LanAustralSignSolidProps): React.ReactElement;
export default LanAustralSignSolid;
