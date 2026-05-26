import React from 'react';

export interface LanCircleParkingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleParkingSolid: React.FC<LanCircleParkingSolidProps>;
export default LanCircleParkingSolid;
