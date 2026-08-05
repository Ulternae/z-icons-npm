import React from 'react';

export interface LanSubtitlesSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSubtitlesSlash(props: LanSubtitlesSlashProps): React.ReactElement;
export default LanSubtitlesSlash;
