import React from 'react';

export interface LanSubtitlesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSubtitles(props: LanSubtitlesProps): React.ReactElement;
export default LanSubtitles;
