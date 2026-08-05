import React from 'react';

export interface LanHandcuffsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandcuffsSolid(props: LanHandcuffsSolidProps): React.ReactElement;
export default LanHandcuffsSolid;
