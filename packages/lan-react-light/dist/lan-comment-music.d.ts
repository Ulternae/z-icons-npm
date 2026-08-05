import React from 'react';

export interface LanCommentMusicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentMusic(props: LanCommentMusicProps): React.ReactElement;
export default LanCommentMusic;
