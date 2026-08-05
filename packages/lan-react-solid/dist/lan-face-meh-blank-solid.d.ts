import React from 'react';

export interface LanFaceMehBlankSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceMehBlankSolid(props: LanFaceMehBlankSolidProps): React.ReactElement;
export default LanFaceMehBlankSolid;
