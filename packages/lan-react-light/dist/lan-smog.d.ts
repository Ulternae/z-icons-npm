import React from 'react';

export interface LanSmogProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSmog(props: LanSmogProps): React.ReactElement;
export default LanSmog;
