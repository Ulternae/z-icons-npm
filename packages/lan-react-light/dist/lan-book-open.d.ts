import React from 'react';

export interface LanBookOpenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookOpen(props: LanBookOpenProps): React.ReactElement;
export default LanBookOpen;
