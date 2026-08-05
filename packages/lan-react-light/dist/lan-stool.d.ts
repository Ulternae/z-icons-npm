import React from 'react';

export interface LanStoolProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStool(props: LanStoolProps): React.ReactElement;
export default LanStool;
