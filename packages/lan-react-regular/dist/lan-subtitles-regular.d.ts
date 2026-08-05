import React from 'react';

export interface LanSubtitlesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSubtitlesRegular(props: LanSubtitlesRegularProps): React.ReactElement;
export default LanSubtitlesRegular;
