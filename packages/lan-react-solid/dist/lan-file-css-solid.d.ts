import React from 'react';

export interface LanFileCssSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileCssSolid(props: LanFileCssSolidProps): React.ReactElement;
export default LanFileCssSolid;
