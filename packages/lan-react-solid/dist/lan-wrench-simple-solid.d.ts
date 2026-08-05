import React from 'react';

export interface LanWrenchSimpleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWrenchSimpleSolid(props: LanWrenchSimpleSolidProps): React.ReactElement;
export default LanWrenchSimpleSolid;
