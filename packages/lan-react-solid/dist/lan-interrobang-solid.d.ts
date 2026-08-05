import React from 'react';

export interface LanInterrobangSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanInterrobangSolid(props: LanInterrobangSolidProps): React.ReactElement;
export default LanInterrobangSolid;
