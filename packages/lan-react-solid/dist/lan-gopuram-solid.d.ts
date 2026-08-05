import React from 'react';

export interface LanGopuramSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGopuramSolid(props: LanGopuramSolidProps): React.ReactElement;
export default LanGopuramSolid;
