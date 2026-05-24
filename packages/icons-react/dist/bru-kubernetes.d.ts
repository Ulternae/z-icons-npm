import React from 'react';

export interface BruKubernetesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruKubernetes: React.FC<BruKubernetesProps>;
export default BruKubernetes;
