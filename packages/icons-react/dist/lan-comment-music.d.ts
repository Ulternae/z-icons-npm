import React from 'react';

export interface LanCommentMusicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentMusic: React.FC<LanCommentMusicProps>;
export default LanCommentMusic;
