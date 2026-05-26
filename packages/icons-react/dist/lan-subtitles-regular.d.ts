import React from 'react';

export interface LanSubtitlesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSubtitlesRegular: React.FC<LanSubtitlesRegularProps>;
export default LanSubtitlesRegular;
