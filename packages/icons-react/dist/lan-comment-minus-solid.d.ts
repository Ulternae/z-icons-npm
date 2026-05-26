import React from 'react';

export interface LanCommentMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentMinusSolid: React.FC<LanCommentMinusSolidProps>;
export default LanCommentMinusSolid;
