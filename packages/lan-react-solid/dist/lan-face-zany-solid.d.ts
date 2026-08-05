import React from 'react';

export interface LanFaceZanySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceZanySolid(props: LanFaceZanySolidProps): React.ReactElement;
export default LanFaceZanySolid;
