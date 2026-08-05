import React from 'react';

export interface LanWrenchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWrenchSolid(props: LanWrenchSolidProps): React.ReactElement;
export default LanWrenchSolid;
