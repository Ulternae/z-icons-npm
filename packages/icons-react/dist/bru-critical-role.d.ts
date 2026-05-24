import React from 'react';

export interface BruCriticalRoleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruCriticalRole: React.FC<BruCriticalRoleProps>;
export default BruCriticalRole;
