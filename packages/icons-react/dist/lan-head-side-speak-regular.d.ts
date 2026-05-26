import React from 'react';

export interface LanHeadSideSpeakRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeadSideSpeakRegular: React.FC<LanHeadSideSpeakRegularProps>;
export default LanHeadSideSpeakRegular;
