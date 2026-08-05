import React from 'react';

export interface LanAustralSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAustralSignThin(props: LanAustralSignThinProps): React.ReactElement;
export default LanAustralSignThin;
