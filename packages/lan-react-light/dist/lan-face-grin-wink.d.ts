import React from 'react';

export interface LanFaceGrinWinkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceGrinWink(props: LanFaceGrinWinkProps): React.ReactElement;
export default LanFaceGrinWink;
