import React from 'react';

export interface LanBookDeadRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookDeadRegular: React.FC<LanBookDeadRegularProps>;
export default LanBookDeadRegular;
