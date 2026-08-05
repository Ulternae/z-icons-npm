import React from 'react';

export interface LanAlignJustifySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlignJustifySolid(props: LanAlignJustifySolidProps): React.ReactElement;
export default LanAlignJustifySolid;
