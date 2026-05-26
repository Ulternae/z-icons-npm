import React from 'react';

export interface LanSquareParkingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareParkingSolid: React.FC<LanSquareParkingSolidProps>;
export default LanSquareParkingSolid;
