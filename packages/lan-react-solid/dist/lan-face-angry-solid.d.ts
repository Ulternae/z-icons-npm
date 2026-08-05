import React from 'react';

export interface LanFaceAngrySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceAngrySolid(props: LanFaceAngrySolidProps): React.ReactElement;
export default LanFaceAngrySolid;
