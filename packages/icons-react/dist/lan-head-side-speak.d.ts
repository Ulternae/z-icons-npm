import React from 'react';

export interface LanHeadSideSpeakProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeadSideSpeak: React.FC<LanHeadSideSpeakProps>;
export default LanHeadSideSpeak;
