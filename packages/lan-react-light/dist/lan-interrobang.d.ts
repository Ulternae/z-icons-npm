import React from 'react';

export interface LanInterrobangProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanInterrobang(props: LanInterrobangProps): React.ReactElement;
export default LanInterrobang;
