import React from 'react';

export interface LanHeadSideSpeakProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeadSideSpeak(props: LanHeadSideSpeakProps): React.ReactElement;
export default LanHeadSideSpeak;
