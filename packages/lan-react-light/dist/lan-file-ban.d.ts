import React from 'react';

export interface LanFileBanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileBan(props: LanFileBanProps): React.ReactElement;
export default LanFileBan;
