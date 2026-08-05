import React from 'react';

export interface LanSquareParkingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareParkingSolid(props: LanSquareParkingSolidProps): React.ReactElement;
export default LanSquareParkingSolid;
