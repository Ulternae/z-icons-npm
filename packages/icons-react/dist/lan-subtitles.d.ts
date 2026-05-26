import React from 'react';

export interface LanSubtitlesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSubtitles: React.FC<LanSubtitlesProps>;
export default LanSubtitles;
