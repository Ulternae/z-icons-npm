import React from 'react';

export interface LanFileBinarySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileBinarySolid(props: LanFileBinarySolidProps): React.ReactElement;
export default LanFileBinarySolid;
