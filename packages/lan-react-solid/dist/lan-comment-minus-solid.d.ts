import React from 'react';

export interface LanCommentMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentMinusSolid(props: LanCommentMinusSolidProps): React.ReactElement;
export default LanCommentMinusSolid;
