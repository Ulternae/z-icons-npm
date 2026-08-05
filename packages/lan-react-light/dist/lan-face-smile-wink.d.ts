import React from 'react';

export interface LanFaceSmileWinkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceSmileWink(props: LanFaceSmileWinkProps): React.ReactElement;
export default LanFaceSmileWink;
