import React from 'react';

export interface LanCircleParkingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleParkingSolid(props: LanCircleParkingSolidProps): React.ReactElement;
export default LanCircleParkingSolid;
