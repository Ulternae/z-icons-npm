import React from 'react';

export interface BruKubernetesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruKubernetes(props: BruKubernetesProps): React.ReactElement;
export default BruKubernetes;
