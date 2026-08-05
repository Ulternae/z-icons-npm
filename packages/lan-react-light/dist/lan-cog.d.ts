import React from 'react';

export interface LanCogProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCog(props: LanCogProps): React.ReactElement;
export default LanCog;
