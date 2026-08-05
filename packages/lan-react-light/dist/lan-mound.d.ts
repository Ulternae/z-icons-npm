import React from 'react';

export interface LanMoundProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMound(props: LanMoundProps): React.ReactElement;
export default LanMound;
