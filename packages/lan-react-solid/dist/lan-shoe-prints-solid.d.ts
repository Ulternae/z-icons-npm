import React from 'react';

export interface LanShoePrintsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShoePrintsSolid(props: LanShoePrintsSolidProps): React.ReactElement;
export default LanShoePrintsSolid;
